import { getNumberUnit } from '@utils'

export const columns = (number, ability) => {
  return [
    {
      name: '#',
      cell: (row, index) => (index + 1) + number,
      grow: 0
    },
    {
      name: 'Provinsi',
      minWidth: '150px',
      selector: 'provinces',
      sortable: false,
      cell: row => (
        <div className='d-flex justify-content-left align-items-center'>
          {row.provinces}
        </div>
      )
    },
    {
      name: 'Kota / Kabupaten',
      minWidth: '200px',
      selector: 'regencies',
      sortable: false,
      cell: row => (
        <div className='d-flex justify-content-left align-items-center'>
          {row.regencies}
        </div>
      )
    },
    {
      name: 'Komunitas',
      minWidth: '200px',
      selector: 'komunitas_name',
      sortable: false,
      cell: row => (
        <div className='d-flex justify-content-left align-items-center'>
          {row.komunitas_name}
        </div>
      )
    },
    {
      name: 'Lansia',
      minWidth: '50px',
      selector: 'lansia',
      sortable: false,
      cell: row => (
        <div className='d-flex justify-content-left align-items-center'>
          {getNumberUnit(row.lansia)}
        </div>
      )
    },
    {
      name: 'Pensiun',
      minWidth: '50px',
      selector: 'pensiun',
      sortable: false,
      cell: row => (
        <div className='d-flex justify-content-left align-items-center'>
          {getNumberUnit(row.pensiun)}
        </div>
      )
    },
    {
      name: 'Pra Pensiun',
      minWidth: '50px',
      selector: 'pra_pensiun',
      sortable: false,
      cell: row => (
        <div className='d-flex justify-content-left align-items-center'>
          {getNumberUnit(row.pra_pensiun)}
        </div>
      )
    },
    {
      name: 'Paruh Baya',
      minWidth: '50px',
      selector: 'paruh_baya',
      sortable: false,
      cell: row => (
        <div className='d-flex justify-content-left align-items-center'>
          {getNumberUnit(row.paruh_baya)}
        </div>
      )
    },
    {
      name: 'Pekerja Awal',
      minWidth: '50px',
      selector: 'pekerja_awal',
      sortable: false,
      cell: row => (
        <div className='d-flex justify-content-left align-items-center'>
          {getNumberUnit(row.pekerja_awal)}
        </div>
      )
    },
    {
      name: 'Muda',
      minWidth: '50px',
      selector: 'muda',
      sortable: false,
      cell: row => (
        <div className='d-flex justify-content-left align-items-center'>
          {getNumberUnit(row.muda)}
        </div>
      )
    },
    {
      name: 'Anak Anak',
      minWidth: '50px',
      selector: 'anak_anak',
      sortable: false,
      cell: row => (
        <div className='d-flex justify-content-left align-items-center'>
          {getNumberUnit(row.anak_anak)}
        </div>
      )
    },
    {
      name: 'Total',
      minWidth: '50px',
      selector: 'total_pengguna',
      sortable: false,
      cell: row => (
        <div className='d-flex justify-content-left align-items-center'>
          {getNumberUnit(row.total_pengguna)}
        </div>
      )
    }
  ]
}
