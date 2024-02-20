import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const username="apurba"
    return (
        <>
           <Link href="/admin/dashboard">Go to admin Dashboard</Link>
           <Link href={`/users/profile/${username}`}>Go to User Profile</Link>
           
        </>
    );
};

export default Navbar;