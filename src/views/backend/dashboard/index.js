import { useContext, useEffect, useState } from 'react'
import { Row, Col, TabContent, TabPane, Nav, NavItem, NavLink, Card, CardBody } from 'reactstrap'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'

// ** Utils
import { isUserLoggedIn } from '@utils'

// ** Styles
import '@styles/react/apps/app-users.scss'

//** Element
import StatsCard from '@src/views/element/StatsCard'
import StatPengguna from '@src/views/backend/statistik_pengguna/list/Table'
import StatPenggunaKomunitas from '@src/views/backend/statistik_pengguna_komunitas/list/Table'

const Dashboard = () => {

  // ** Store Vars
  const store = useSelector(state => state.profile),
  dispatch = useDispatch()

  const [userData, setUserData] = useState(null)
  const [isMounted, setIsMounted] = useState(false)

  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  //** ComponentDidMount
  useEffect(() => {
    if (isUserLoggedIn() !== null) {
      const user = JSON.parse(localStorage.getItem('userData'))
      setUserData(user.userdata)
    }

    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div id='dashboard' className="px-1">
      <Row className='match-height'>
        <Col xs='12'>
          <StatsCard cols={{ xl: '3', sm: '6' }} />
        </Col>
        <Col xs='12'>
          <Card>
            <CardBody>
              <Nav tabs justified>
                <NavItem>
                  <NavLink
                    active={active === '1'}
                    onClick={() => {
                      toggle('1')
                    }}
                  >
                    Pengguna
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    active={active === '2'}
                    onClick={() => {
                      toggle('2')
                    }}
                  >
                    Komunitas
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent className='py-50' activeTab={active}>
                <TabPane tabId='1'>
                  <StatPengguna />
                </TabPane>
                <TabPane tabId='2'>
                  <StatPenggunaKomunitas />
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard
