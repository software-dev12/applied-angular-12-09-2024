import { Routes } from '@angular/router';
import { AtmComponent } from './atm.component';
import { WithdrawComponent } from './components/withdraw.component';
import { DepositComponent } from './components/deposit.component';
import { AtmStore } from './services/atm.store';

export const ATM_ROUTES: Routes = [
  {
    path: '',
    component: AtmComponent,
    providers: [AtmStore],
    children: [
      {
        path: 'withdrawal',
        component: WithdrawComponent,
      },
      {
        path: 'deposit',
        component: DepositComponent,
      },
    ],
  },
];
