import React from 'react'
import CIcon from '@coreui/icons-react'

export default [
    {
      _tag: 'CSidebarNavItem',
      name: 'Home',
      to: '/dashboard',
      icon: <CIcon name="cil-home" customClasses="c-sidebar-nav-icon"/>,
      badge: {
        color: 'info',
      }
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'List Produk',
      icon: 'cil-puzzle',
      to: '/listProduk'
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Input Produk',
      icon: 'cil-inbox',
      to: '/inputProduk'
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Hasil Transaksi',
        icon: 'cil-dollar',
        to: '/hasilTransaksi'
    }
  ]