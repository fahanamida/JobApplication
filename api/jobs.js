let jobs = []

export default function handler(req, res) {

  if (req.method === "GET") {
    return res.status(200).json(jobs)
  }

  if (req.method === "POST") {
    const newJob = {
      ...req.body,
      id: Date.now().toString()
    }
    jobs.push(newJob)
    return res.status(201).json(newJob)
  }

  if (req.method === "PUT") {
    const { id } = req.query
    jobs = jobs.map(job => job.id === id ? req.body : job)
    return res.status(200).json(req.body)
  }

  if (req.method === "DELETE") {
    const { id } = req.query
    jobs = jobs.filter(job => job.id !== id)
    return res.status(200).json({msg:"Deleted"})
  }

}