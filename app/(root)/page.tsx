import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';


const Home = () => {
  const loggedIn = {firstName: 'Yuval', lastName: 'Gorelik', email: 'yuval@gmail.com'};

  return (
    <div className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext="Access and manage your account and 
          transactions efficiently."
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />


        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
        user = {loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.50}, {currentBalance: 500.00}]}
      />
    </div>
  )
}

export default Home