export const usePostResuest = async (endpoint, requestBody) => {
    let request = await fetch(import.meta.env.VITE_REACT_APP_BACKEND_URL + endpoint, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(requestBody)
    })
    let result = await request.json()
    return result
}