import { motion } from 'framer-motion'

const jobs = [
  {
    title: 'Software Engineer',
    company: 'ABC Tech',
    period: '2021 - Present',
    description: 'Developing and maintaining web applications.',
    color: 'bg-blue-500',
  },
  {
    title: 'Frontend Developer',
    company: 'XYZ Corp',
    period: '2019 - 2021',
    description: 'Building interactive UI using React.js.',
    color: 'bg-green-500',
  },
  {
    title: 'Intern Web Developer',
    company: 'Startup Inc',
    period: '2018 - 2019',
    description: 'Assisted in web development projects.',
    color: 'bg-purple-500',
  },
]

export default function JobTimeline() {
  return (
    <div className="max-w-4xl mx-auto my-10 px-4">
      <ul className="relative border-l-4 border-gray-300">
        {jobs.map((job, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mb-10 ml-6"
          >
            <div
              className={`absolute w-4 h-4 ${job.color} rounded-full -left-2.5 border border-white`}
            ></div>
            <div
              className={`bg-white p-4 shadow-lg rounded-lg md:w-1/2 ${
                index % 2 === 0 ? 'md:ml-auto' : ''
              }`}
            >
              <h3
                className={`text-lg font-semibold ${job.color} text-white p-2 rounded`}
              >
                {job.title}
              </h3>
              <p className="text-sm text-gray-600">
                {job.company} - {job.period}
              </p>
              <p className="text-gray-700 mt-2">{job.description}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
