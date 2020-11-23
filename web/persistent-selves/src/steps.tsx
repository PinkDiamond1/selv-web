import {
    IntroTodos,
    IntroWelcome,
    IntroOutcomes,
    IntroLifeSpan,
    AppDownloadQR,
    ProveIdentity,
    SingInConfirmation,
    CompanyData,
    CompanyDetails,
    Confirmation,
    BankData,
    InsuranceData,
    PledgeRegistry,
    GreatSuccess,
    ThankYou
} from './pages';

export const routes = [
    { path: '/demo/welcome', page: IntroWelcome },
    { path: '/demo/outcomes', page: IntroOutcomes },
    { path: '/demo/lifespan', page: IntroLifeSpan },
    { path: '/demo/todos', page: IntroTodos },
    { path: '/demo/app/0', page: AppDownloadQR },
    { path: '/company/list/0', page: PledgeRegistry },
    { path: '/company/prove/0', page: ProveIdentity },
    { path: '/company/signin/0', page: SingInConfirmation },
    { path: '/company/data/0', page: CompanyData },
    { path: '/company/confirm/1', page: Confirmation },
    { path: '/demo/success/1', page: GreatSuccess },
    { path: '/company/details/1/:companyId', page: CompanyDetails },
    { path: '/bank/prove/1', page: ProveIdentity },
    { path: '/bank/data/1', page: BankData },
    { path: '/bank/confirm/2', page: Confirmation },
    { path: '/company/details/2/:companyId', page: CompanyDetails },
    { path: '/insurance/prove/2', page: ProveIdentity },
    { path: '/insurance/data/2', page: InsuranceData },
    { path: '/insurance/confirm/3', page: Confirmation },
    { path: '/company/details/3/:companyId', page: CompanyDetails },
    { path: '/demo/thankyou', page: ThankYou }
];

export const mainSteps = [
    { title: 'Create your identity' },
    { title: 'Visit the registry' },
    { title: 'Start your pledge' },
    { title: 'Create your legacies' }
];
