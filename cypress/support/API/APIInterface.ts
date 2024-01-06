export interface ApiInterface<T> {
    endpoint: string
    get?: () => Cypress.Chainable<Cypress.Response<T>>
    getAll?: () => Cypress.Chainable<Cypress.Response<T>>
}