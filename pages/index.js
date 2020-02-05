

const Index = ({host}) => (
  <React.Fragment>
  <div className="bg-img"><p className="text">My IP address: {host}</p></div>    
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

Index.getInitialProps = async ctx => {
  return { host: ctx.req.headers.host }
}

export default Index;