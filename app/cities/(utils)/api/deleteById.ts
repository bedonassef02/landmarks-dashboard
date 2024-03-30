import { CITIES_URL } from '@/app/cities/(utils)/constants'

export async function deleteCity(id: string): Promise<any> {
  const url:string = `${CITIES_URL}/${id}`
  const response: Response = await fetch(url,
    {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZThhOWUwMDFkNDBkNTUwMjliYmUyYyIsIm5hbWUiOiJiZWRvIiwiZW1haWwiOiJiZWRvbmFzc2VmNzNAZ21haWwuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNzExNjkzNjIwLCJleHAiOjE3MTE3ODAwMjB9.XLXVkHuy0v4TjGE18fYjUjvPOilrJa64nP19UyhtBqc`,
      }
    })
  if (response.ok) {
    return response.json()
  } else {
    return null
  }
}