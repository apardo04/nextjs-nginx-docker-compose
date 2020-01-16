const Index = () => (
    <React.Fragment>
    <div className="bg-img"><p className="text">My IP address: 3.86.110.201</p></div>    
      <style jsx>{`
          .bg-img {
            background: url(/img/docker.jpg) no-repeat center fixed;
            background-size: cover;
            height: 855px;
          }
          .text {
            font-size: 40px;
            margin: 0;
          }
      `}</style>
    </React.Fragment>
  );
  
  export default Index;