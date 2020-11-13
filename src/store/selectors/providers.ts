import { IProviderStore, sliceName } from '../reducers/provider'
import { keySelectors, AnyProps } from './helpers'

const store = (s: AnyProps) => s[sliceName] as IProviderStore

export const { message, status } = keySelectors(store, ['message', 'status'])

export const providerSelectors = { message, status }

export default providerSelectors
