const qu=[
   

"Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",

"Don’t watch the clock; do what it does. Keep going. — Sam Levenson",

"You don’t have to be great to start, but you have to start to be great.— Zig Ziglar",

"Everything you’ve ever wanted is on the other side of fear. — George Addair",

"Discipline is the bridge between goals and accomplishment. — Jim Rohn",



"Programs must be written for people to read, and only incidentally for machines to execute. — Harold Abelson",

"First, solve the problem. Then, write the code. — John Johnson",

"Simplicity is the soul of efficiency. — Austin Freeman",

"Creativity is intelligence having fun. — Albert Einstein",

"Any fool can write code that a computer can understand. Good programmers write code that humans can understand. — Martin Fowler",



"In the middle of difficulty lies opportunity. — Albert Einstein",

"The only true wisdom is in knowing you know nothing. — Socrates",

"We are what we repeatedly do. Excellence, then, is not an act, but a habit. — Aristotle",

"He who is not courageous enough to take risks will accomplish nothing in life. — Muhammad Ali",

"Do not go where the path may lead, go instead where there is no path and leave a trail. — Ralph Waldo Emerson"
]
const useIndex=new Set()
const quElement=document.getElementById("quote")
function generateQuote()
{
    const quIndex=Math.floor(Math.random()*qu.length)
    const q=qu[quIndex]
    quElement.innerHTML=q

}