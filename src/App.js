import React from 'react';

// the hoc
import { withNamespaces } from 'react-i18next';

function App ({ t }) {
  return <h1>{t('Welcome to React')}</h1>
}

export default withNamespaces()(App);