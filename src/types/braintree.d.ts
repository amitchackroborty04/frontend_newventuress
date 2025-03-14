declare module "braintree-web-drop-in" {
  export interface Options {
    authorization: string
    container: HTMLElement | string
    locale?: string
    paymentOptionPriority?: string[]
    card?: {
      overrides?: {
        fields?: {
          number?: {
            placeholder?: string
            maskInput?: boolean
          }
          postalCode?: {
            placeholder?: string
          }
          cvv?: {
            placeholder?: string
          }
          expirationDate?: {
            placeholder?: string
          }
        }
        styles?: Record<string, any>
      }
    }
    paypal?: {
      flow?: "checkout" | "vault"
      amount?: string
      currency?: string
      buttonStyle?: Record<string, any>
    }
    venmo?: {
      allowNewBrowserTab?: boolean
      paymentMethodUsage?: string
      profileId?: string
      displayName?: string
    }
    dataCollector?: {
      kount?: boolean
    }
    vaultManager?: boolean
  }

  export interface PaymentMethodRequestablePayload {
    type: string
    paymentMethodIsSelected: boolean
  }

  export interface PaymentOptionSelectedPayload {
    paymentOption: string
  }

  export interface Dropin {
    clearSelectedPaymentMethod(): void
    isPaymentMethodRequestable(): boolean
    on(event: string, callback: (payload: any) => void): void
    off(event: string, callback: (payload: any) => void): void
    requestPaymentMethod(
      options?: Record<string, any>,
    ): Promise<{ nonce: string; details?: Record<string, any>; type?: string; description?: string }>
    teardown(): Promise<void>
    updateConfiguration(key: string, value: any): void
  }
}

