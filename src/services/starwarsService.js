import * as tokenService from './tokenService' // Adjust the path as needed

const baseUrl = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api`

async function getAllStarships() {
  try{
    const res = await fetch(`${baseUrl}/starships`, {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
    })
    if (!res.ok) {
      throw new Error('Failed to fetch starships')
    }
    return await res.json()
  } catch(error) {
    console.error('Error fetching starships:', error)
    throw error
  }
}

export {
  getAllStarships,
}