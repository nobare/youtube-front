export default async (req, res) => {
  try {
    const { query } = req.body
    const options = {
      method: 'POST',
      body: JSON.stringify(query),
      headers: { 
        'Content-Type' : 'application/json', 
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }
    const data = await fetch('http://localhost:3003/search', options)
  
    console.log(data);
    return res.json(data)
  
  } catch (error) {
    return res.status(500).json({
      error: `There was an error ${error}`
    })  
  }
}