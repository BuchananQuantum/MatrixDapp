import { Provider as JotaiProvider } from 'jotai'
import React, { useState } from 'react'
import type { ReactElement, ReactNode } from 'react'

import { getNetworksConfig } from '@multiauth/networks'
import { stateScope } from '@multiauth/state'
import type { PartialNetworkConfig } from '@multiauth/types'

import ConnectModal from '../connect-modal'
import type { ConnectModalConfig } from '../connect-modal'

export type ProviderConfig = {
    modal?: ConnectModalConfig
    networks?: Array<PartialNetworkConfig>
  }
  
  export type ProviderProps = ProviderConfig & {
    children: ReactNode
  }
  
  export function Provider(props: ProviderProps): ReactElement {
    const [networksConfig] = useState(() => getNetworksConfig(props.networks ?? ['ethereum']))
  
    return (
      <JotaiProvider scope={stateScope}>
        {props.children}
        <ConnectModal {...(props.modal ?? {})} networks={networksConfig} />
      </JotaiProvider>
    )
  }