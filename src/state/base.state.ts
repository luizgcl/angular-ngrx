export enum StateStatus {
    success = 'success',
    loading = 'loading',
    pending = 'pending',
    error = 'error'
}

export interface BaseState {
    error: string | null
    status: StateStatus
}
