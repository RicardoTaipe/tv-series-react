import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import Intro from '../../components/Intro';

import TextField from '@material-ui/core/TextField';

class Series extends Component{

    state={
        series:[],
        seriesName:'',
        isFetching: false,
        importantText:''
    }


    onSeriesInputChange = e =>{
        this.setState({seriesName:e.target.value, isFetching:true})
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then((response)=> response.json())
            .then(json => this.setState({series:json, isFetching:false}))
    }

    render(){
        const {series, seriesName, isFetching,importantText}=this.state
        return(
            <div>
                <Intro message={"Here you can find all of your most loved series"}/>
                <div>
                    <TextField
                        id="search"
                        label="Search Series"
                        type="search"
                        margin="normal"
                        value={seriesName}
                        onChange={this.onSeriesInputChange}
                        helperText={importantText}
                    />
                </div>
                <div>
                    {
                        !isFetching && series.length === 0 && seriesName.trim() === ""
                        &&
                        <p>Plese enter series name into the input</p>
                    }
                    {
                        !isFetching && series.length === 0 && seriesName.trim() !== ""
                        &&
                        <p>No TV Series have been found with this name</p>
                    }
                    {
                        isFetching && <Loader/>
                    }
                    {
                        !isFetching && <SeriesList list={this.state.series}/>
                    }
                </div>
            </div>
        )
    }
}

export default Series