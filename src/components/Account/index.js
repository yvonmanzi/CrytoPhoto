import React from 'react'
import ProtoTypes from 'prop-types'
import { OPENSEA_URL } from '../../constants'

const MAX_ADDR_LEN = 6

export default class Account extends React.Component {
    static protoTypes = {
        account: ProtoTypes.shape({
            address: ProtoTypes.string.isRequired,
            user: ProtoTypes.shape({
                username: ProtoTypes.string.isRequired
            })
        }).isRequired,
        showImage: ProtoTypes.bool
    }
    render() {
        const { account, showImage } = this.props
        const _username = account.user ? account.user.username : null
        const _address = account.address
        const displayName = _username ? _username : _address.substring(2, MAX_ADDR_LEN + 2).toUpperCase()

        return (
            <a target="_blank" rel="noopener noreferrer" href={`${OPENSEA_URL}/accounts/${_address}`}>
                {showImage && account
                    ? <div style={{ backgroundImage: 'url("' + account.image + '")' }} />
                    : null
                }
                <span>{displayName}</span>
            </a>
        )
    }
}