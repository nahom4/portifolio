"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {bebas_neue, inter} from '@/app/font'
import DragHandleIcon from '@mui/icons-material/DragHandle';
import Link from 'next/link';
function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='text-red'>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <div>
          <DragHandleIcon style={{ color: '#C7C7C7', fontSize: 45 }}/>
        </div>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link href='#projects'>Projects</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='#about'>About</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='#contact'>Contact</Link></MenuItem>
      </Menu>
    </div>
  );
}
export default function Header(){
    return (
        <div className={`text-[#C7C7C7] flex items-center justify-between p-2 md:p-10`}>
            <h1 className={`${bebas_neue.className} text-2xl`}>    
                NAHOM KIFLE
            </h1>
            <div className={`md:hidden`}>
              <BasicMenu/>
            </div>
            <nav className={`${inter.className} hidden md:flex gap-3 text-sm`}>
              <Link href='#projects'>Projects</Link>
              <Link href='#about'>About</Link>
              <Link href='#contact'>Contact</Link>
            </nav>
        </div>
    )
}