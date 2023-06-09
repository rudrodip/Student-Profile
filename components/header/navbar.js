import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from "../../context/AuthContext"

const Navbar = () => {
	const { user, logout } = useAuth()
	const router = useRouter()

	const handleLogout = () => {
		logout()
		router.push('/login')
	}

	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</label>
					<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
						<li><Link href="/notices">Notices</Link></li>
						<li tabIndex={0}>
							<a className="justify-between">
								Result
								<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
							</a>
							<ul className="p-2 bg-gray-700">
								<li><a href="http://180.211.183.206/EasyCollegeMate/public/result" target="_blank">Internal</a></li>
								<li><a href="https://rc.gov.bd/hsc-result-final/" target="_blank" >Board</a></li>
							</ul>
						</li>
						<li><Link href="/help">Ask</Link></li>
						<li><Link href="/questions">Questions</Link></li>
					</ul>
				</div>
				<Link className="btn btn-ghost normal-case text-xl" href="/">Student Profile</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li><Link href="/notices">Notices</Link></li>
					<li tabIndex={0}>
						<a>
							Result
							<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
						</a>
						<ul className="p-2 bg-gray-700">
							<li><a href="http://180.211.183.206/EasyCollegeMate/public/result" target="_blank">Internal</a></li>
							<li><a href="https://rc.gov.bd/hsc-result-final/" target="_blank" >Board</a></li>
						</ul>
					</li>
					<li><Link href="/help">Ask</Link></li>
					<li><Link href="/questions">Questions</Link></li>
				</ul>
			</div>
			<div className="navbar-end">
				<div className="dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<img src={user?.photoURL || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />
						</div>
					</label>
					<ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
						<li>
							<Link className="justify-between" href="/">
								Profile
							</Link>
						</li>
						<li><a htmlFor="my-modal">Settings</a></li>
						<li><a onClick={handleLogout}>Logout</a></li>
					</ul>
				</div>
			</div>
		</div >
	)
}

export default Navbar