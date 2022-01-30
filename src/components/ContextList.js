const AddContext = () => {

    state = {
        name: "",
        lang: "TR",
        parentContextName: ""
    };

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.lang === "" || this.state.parentContextName === ""){
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addContextHandler(this.state);
        this.setState({name:"",lang:"",parentContextName:""});
        //locate to getAllContexts
        this.props.history.push("/contexts/");
    };

    return (
        <Container>
          <div className='starter-template text-center mt-5'>
            <h1>{head}</h1>
            <p className='lead text-capitalize'>{description}</p>
          </div>
        </Container>
      )
};