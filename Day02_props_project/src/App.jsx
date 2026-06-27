import React from 'react'
import Card from "./components/Card.jsx"

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://imgs.search.brave.com/023_3Tu7qfEXOqwKcTSm3Zjfh_XK-At-dk3PMSaB1pE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2Lzk1LzEzLzgx/LzM2MF9GXzY5NTEz/ODE0OV9HZFJJUHhT/b1hVMGE2VGdINlNs/M1o5VEdhT1NqekhC/ZC5qcGc",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/KX9lQYmGMvZRZeOxgq3gz-84WBhU3PzszozkeMODMNo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTUv/MjEwLzg5MC9zbWFs/bC9tZXRhLWxvZ28t/c3F1YXJlLXJvdW5k/ZWQtbWV0YS1sb2dv/LW1ldGEtbG9nby1m/cmVlLWRvd25sb2Fk/LWZyZWUtcG5nLnBu/Zw",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/fDgnDC5_yugXHiCM6lN-rhPBXJ_NDMTyZplZXeJW8Us/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE2LzkxLzU5LzIx/LzM2MF9GXzE2OTE1/OTIxODZfdXNBNkVz/Q2o3WDVtNjNWeUZx/TUNzaEpGYXBvSHB3/SUwuanBn",
    companyName: "Amazon",
    datePosted: "1 day ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/dsVf3xdifos-crqa6a2LnS-GWPFUtMiG24wBO2LIWu0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM3LzJm/L2MxLzM3MmZjMTQy/MWMxNWYzZjk0MzYx/YzY2Yjk2NTU4YjZj/LmpwZw",
    companyName: "Apple",
    datePosted: "3 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/C17fMebkg4mZPtMBf101w2fwnmYmyt3Ev1jynXd157o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/Mjk3NjQ2ODdlYzc2/YjgyZmIyMWZjZTIu/cG5n",
    companyName: "Netflix",
    datePosted: "7 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/6ymExsCa5GlkOfwA41-pUHDXd76NvBzxPw9Aw4e8tXM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/Ni9NaWNyb3NvZnQt/V2luZG93cy1QTkct/SW1hZ2UucG5n",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/AE-2OUfeHAMr7PJ8sFlWjDQ0rHeGhphNGwTbTGXPk9Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTA4/MjM1NDIucG5n",
    companyName: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/bNAqZk7EQtxyh1azResjmm0L8jyUYn_DIwuxD86MAjA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMwLzIvYWRvYmUt/YWNyb2JhdC1sb2dv/LXBuZ19zZWVrbG9n/by0zMDAzNDIucG5n",
    companyName: "Adobe",
    datePosted: "2 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/Br-LzgWD1q1fdgaVfGpUNAqlr98EZya8FpDNSxMPD-s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzYxLzIvb3JhY2xl/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTYxNDM5/OS5wbmc",
    companyName: "Oracle",
    datePosted: "8 days ago",
    post: "Java Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/PiTh69Wej1DNRqH4ycDUSwbheNZdHIWsDL6nvyUO6Vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGF0Y2h3aXNlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8wMS9pbWFnZS0x/Mi5wbmc",
    companyName: "IBM",
    datePosted: "3 days ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$35/hr",
    location: "Chennai, India"
  }
];

  return (
    <div className='parent'>
     {jobOpenings.map(function(elem) {
      return <Card 
      company= {elem.companyName} date_post= {elem.datePosted} logo={elem.brandLogo}
      post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} loc={elem.location}
      />
     })}
    </div>
  )
}

export default App
