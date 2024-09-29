import React from 'react';
import ReactDOM from 'react-dom/client';


class Salam extends React.Component
{
  render()
  {
    return(
      <h1>
      salma dostan
       </h1>
    )
  }
}

class Timer extends React.Component
{
  render()
  {
    return(
      <h2>
      it is:{new Date().toLocaleString()}
    </h2>
    )
  }
}


class App extends React.Component
{
  render()
  {
    return <div>
      <Salam/>
      <Timer/>

  </div>
  }
}

// var object1=new App();


class TIMESharing extends React.Component
{
  render()
  {
    return (
      setInterval(()=>
        {
          hasel();
        },1000)
        
        
    )
  }
}


const hasel=()=>
{
  // const element=(
    // <div>
    //   <h1>
    //   salma dostan
    //    </h1>
    //   <h2>
    //     it is:{new Date().toLocaleString()}
    //   </h2>
    // </div>
  // )

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
   <App/>
  
  );
}

<TIMESharing/>