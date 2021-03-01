export const constants = {
  localStorageSessionKey: "sw-auth",
  landingPageAfterLogin: "/offers/highly-recommended",

  apiUrl: {
    login: "login",
    autoLogin: "auto-login",
    socialLogin: "social-login",
    forgotPassword: "forgot-password",
    resetPassword: "reset-password",
    registerNewUser: "register",
    totalUserEarning: "total-earning",

    user: {
      self: "user",
      spinwin: "user/spinwin",
      confirmEmail: "user/confirm-email",
      reloadUser: "user/reload",
      startCintSession: "user/start-cint-session",
      unsubscribe: "user/unsubscribe",
      unsubscribeFromEmail: "user/unsubscribefromemail?userId={userId}",

      onboarding: {
        updateStep: "user/onboarding/updatestep"
      }
    },

    offers: {
      getAll: "offers/getAll",
      topPaid: "offers/toppaid",
      offersHistory: "offers/history",

      callBack: {
        get: "offers/callback/get?get_new_if_completed={getNewIfCompleted}&user_id={userId}&offer_id={offerId}"
      }
    },

    payment: {
      request: {
        self: "payment/request",
        getAll: "payment/request/getAll"
      },

      transaction: {
        earningBreakdown: "payment/transaction/earning-breakdown"
      }
    },

    emailNotification: {
      create: "emailNotification/create"
    },

    surveys: {
      self: "surveys",
      cint: "surveys/cint",
      getQuestions: "surveys/questions?user_id={userId}&survey_id={surveyId}",
      saveAnswers: "surveys/answers",
      callBack: "surveys/callback?user_id={userId}&client_survey_id={clientSurveyId}",
      coreg: {
        self: "surveys/coreg?user_id={userId}",
        saveAnswers: "surveys/coreg/answers"
      }
    }
  },

  apiRequestHeaders: {
    default: {
      contentType: "application/json",
      ifModifiedSince: "0",
      cacheControl: "no-cache",
      pragma: "no-cache"
    }
  },

  errorCodes: {
    failure: "200",
    businessValidation: "201",
    exception: "202",
    requestValidation: "203"
  },

  dateFormats: {
    mmddyyyy: "MM-dd-yyyy",
    yyyyMMddHHmmss: "yyyy-MM-dd HH:mm:ss",
    MMDDYYYY_hhmm: "MM/DD/YYYY hh:mm",
    moment: ["MM/DD/YYYY", "YYYY-MM-DD HH:mm:ss", "MM/DD/YYYY hh:mm"]
  },

  toasterConfig: {
    showCloseButton: false,
    tapToDismiss: true,
    timeout: 5000,
    positionClass: "toast-top-right"
  },

  userOnboardingSteps: {
    topPaidSurvey: "topPaidSurvey",
    informationConfirmed: "informationConfirmed",
    coregFormSubmitted: "coregFormSubmitted",
    coregQuestionsSubmitted: "coregQuestionsSubmitted"
  },

  events: {
    toggleMobileMenu: "toggleMobileMenu",
    logout: "logout"
  },

  routesMapper: {
    cashsurvey: "surveys/my-studies",
    bonusoffers: "offers/bonus-offers",
    paidoffers: "offers/highly-recommended"
  }
};
