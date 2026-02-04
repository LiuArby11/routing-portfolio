import { useParams } from 'react-router-dom'


export default function ReviewDetails() {
const { id } = useParams()
const reviews = JSON.parse(localStorage.getItem('reviews')) || []
const review = reviews.find(r => r.id.toString() === id)


if (!review) return <p className="p-10">Review not found.</p>


return (
<section className="p-10 max-w-2xl mx-auto">
<h2 className="text-xl font-bold">{review.name}</h2>
<p className="mt-4">{review.comment}</p>
</section>
)
}