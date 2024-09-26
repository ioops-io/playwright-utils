
export function logHttpStatusCode(test: any, statusCode: number): void {
    test.info().annotations.push({ type: 'httpStatusCode', description: statusCode});
}

export function logResponseSize(test: any, response: any): void {
    const size = Object.keys(response).length;
    test.info().annotations.push({ type: 'responseSize', description: size});
}

export function startElapsed(test: any): void {
    test.startElapsed = Date.now();
}

export function stopElapsed(test: any): void {
    const elapsed = Date.now() - test.startElapsed;
    test.info().annotations.push({ type: 'elapsedMs', description: elapsed});
}