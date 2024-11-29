import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { EthosConnectProvider } from './path-to-your-component';

const Wrapper = memo(function Wrapper({ children }) {
  return (
    <EthosConnectProvider>
      {children}
    </EthosConnectProvider>
  );
});

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
