import axios from 'axios';

export default async (req, res) => {
  try {
    const search = req.body
    const { data } = await axios.get('http://localhost:3003/mock')
    //const { data } = await axios.post('http://localhost:3003/search', search)
    return res.json(data)
  
  } catch (error) {
    return res.status(500).json({
      error: `There was an error ${error}`
    })  
  }
}