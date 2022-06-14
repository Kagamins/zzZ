export default function handler(req, res) {
    const body = req.body
    console.log('body: ', body)
  
    // Both of these are required.
    if (!body.nickname || !body.roomcode) {
      return res.json({ data: 'room not found' })
    }
  
    // Found the name.
    res.json({ data: `${body.nickname} ${body.roomcode}` })
  }