import React from 'react';


type UserWalletType = {
    title: string
    amount: number
}
type UserWalletPropsType = {
    wallet: UserWalletType
}

export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
    return <div>title: {props.wallet.title}, amount: {props.wallet.amount} </div>
}

export const UserMoney = () => {
    const wallets = [
        {title: 'bitcoin', amount: 1},
        {title: '$', amount: 100},
        {title: 'EURO', amount: 500},
        {title: 'dram', amount: 4500},
    ]

    return <div>
        <UserWallet wallet={wallets[0]} />
        <UserWallet wallet={wallets[1]} />
        <UserWallet wallet={wallets[2]} />
        <UserWallet wallet={wallets[3]} />
    </div>
}


export const Components7 = () => {
    return (
        <div>
            <UserMoney/>
        </div>
    );
};