import {
  ChangeDetectionStrategy,
  Component,
  inject,
  output,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime, filter, tap } from 'rxjs';
import { FriendsStore } from '../services/friends.store';

@Component({
  selector: 'app-friend-create',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="addFriend()">
      @let nameField = form.controls.name;
      @if (form.invalid && (nameField.touched || nameField.dirty)) {
        <div role="alert" class="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          @if (nameField.hasError('required')) {
            <span>Need a Name for Your Friend!</span>
          }
          @if (nameField.hasError('minlength')) {
            <span
              >The name has to have at least
              {{ nameField.getError('minlength')['requiredLength'] }} letters.
              You only have
              {{ nameField.getError('minlength')['actualLength'] }}</span
            >
          }
        </div>
      }
      <label class="input input-bordered flex items-center gap-2">
        Name
        <input type="text" class="grow" formControlName="name" />
      </label>
      <button type="submit" class="btn btn-primary">Add Friend</button>
    </form>
  `,
  styles: ``,
})
export class FriendCreateComponent {
  personAdded = output<string>();
  store = inject(FriendsStore);
  form = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
      nonNullable: true,
    }),
  });

  constructor() {
    this.form.controls.name.setValue(this.store.savedName());

    this.form.controls.name.valueChanges
      .pipe(
        debounceTime(250),
        filter(() => this.form.controls.name.valid),
        tap((r) => this.store.setSavedName(r)),
        takeUntilDestroyed(), /// working on older angular apps.
      )
      .subscribe();
  }

  addFriend() {
    if (this.form.valid) {
      this.store.addFriend(this.form.controls.name.value);
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
