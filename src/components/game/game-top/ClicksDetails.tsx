import React, { Fragment, useEffect, useState } from 'react'
import { Team } from '../../../models/Team'
import { useParams } from 'react-router'
import { State } from '../../../store/reducers'
import { useSelector } from 'react-redux'

import ClickButton from './ClickButton'

const ClicksDetails: React.FC<{ team: Team }> = (props) => {
  const params = useParams()
  const [userExists, setUserExists] = useState<boolean>(false)
  const { clicks } = props.team

  const currentUserToken = useSelector((state: State) => state.auth!.idToken)

  const verifyUserExistence = async () => {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBl1_l6lNxJOtfzcrIBS579DXkjdgdrQeU',
      {
        method: 'POST',
        body: JSON.stringify({ idToken: currentUserToken }),
        headers: { 'Content-Type': 'application/json' },
      }
    )

    if (!response.ok) {
      throw new Error('User Verification Failed')
    }

    const data = await response.json()

    data.users.forEach((user: any) => {
      if (params.session === user.localId) {
        setUserExists(true)
      } else {
        setUserExists(false)
      }
    })
  }

  useEffect(() => {
    try {
      verifyUserExistence()
    } catch (err) {
      console.log(err)
    }
  }, [])

  console.log(params.session)

  return (
    <Fragment>
      <ClickButton disabled={!userExists} />
      {!userExists && <p>User could not be verified.</p>}
      <div className='clicks-details'>
        <div className='clicks-detail'>
          <i>Your Clicks:</i>
          <span>{clicks.yourClicks}</span>
        </div>
        <div className='clicks-detail'>
          <i>Team Clicks:</i>
          <span>{clicks.teamClicks}</span>
        </div>
      </div>
    </Fragment>
  )
}

export default ClicksDetails
