import React from 'react';
import Results from "./Results";
import wiki from "./files/wiki.png";


class App extends React.Component{

  state = {
    title:"",
    description:"",
    link:"",
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    const userSearch = e.target.elements.userSearch.value;
    const url =`https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=${userSearch}&format=json&callback?`;

    fetch(url)
    .then((data) => {
      return data.json()
    })
    .then(response => {
      this.setState({
        title:response.map(result => {
          return <Results 
              title={result[1]}
              // description={result[2]}
              // link={result[3]}

          />
        })
      })
      

        
    })
    .catch(error => {
      console.log(`"error" ${error}`)
    })
    


  }
      // results.innerHTML = `<li>${response[1]}</li>`;
      // results.innerHTML = `<li>${response}</li>`;
      // console.log(results.innerHTML = `<li>${response}</li>`);
    // })
    // .catch((error) => {
    //   console.log("errorrororo" + error)
    // })
    // alert(userSearch);



  render(){
    return (
      <div className="container-fluid">
        <h1 className="text-center display-3 font-weight-bold">Wikipedia Viewer -<i className="fa fa-wikipedia-w" aria-hidden="true"></i>-</h1>      
        <img src={wiki} className="wikiImg img-responsive mx-auto d-block" alt="Wiki"  />
  
        <form onSubmit={this.handleSubmit}>
          <div className="text-center " id="searchInfo">    
            <input name="userSearch" id="userSearch" type="text" placeholder="Search..." />
            <button className="btn btn-primary " ><i className="fa fa-search"></i></button>
            
            <div className="container" >
              {this.state.title}
              {/* {this.state.description}
              {this.state.link} */}
              
            </div>
    
          </div>
        </form>

  
       
  
      </div>
    );
  }
} 

  
  

export default App;



        // description:response[2].map(result2 => {
        //   return <Results description={result2} />
        // })