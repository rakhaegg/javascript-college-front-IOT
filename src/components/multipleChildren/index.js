function Contacts() {
    return <div className="Contacts" />;
  }
  
  function Chat() {
    return <div className="Chat" />;
  }
  
  function SplitPane(props) {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">
            {console.log(props.left)}
          {props.left}
        </div>
        <div className="SplitPane-right">
          {props.right}
          {console.log(props.right)}
        </div>
      </div>
    );
  }
  
  function Show() {
    return (
      <SplitPane
        left={
          <Contacts />
        }
        right={
          <Chat />
        } />
    );
  }

export default Show