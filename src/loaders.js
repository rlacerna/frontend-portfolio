// BASE URL OF OUR DEPLOYED API
// BASE URL OF OUR DEPLOYED API
const URL = "http://mydeployedurl.hostserver.whatever"

export const projectsLoader = async () => {
    const response = await fetch(URL + "/projects")
    const projects = await response.json()
    return projects
}

export const aboutLoader = async () => {
    const response = await fetch(URL + "/about")
    const about = await response.json()
    return about
}