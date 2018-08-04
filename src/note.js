import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  card: {
    width: "100%",
  },
  delete: {
    float: 'left',
    paddingBottom: '5px'
  }
};

export default class Note extends Component  {
  constructor ( props ) {
    super( props );
    this.state = {
        notes: []
    }
  }
  
  render() {
    const {onDelete} = this.props;
    return <Card style={styles.card}>
        <CardContent>
            <Typography  color="textSecondary">
            {this.props.value.title}
          </Typography>
            <Typography component="p">
                {this.props.value.description}
            </Typography>
            <DeleteIcon style={styles.delete} onClick={onDelete} />
        </CardContent>
    </Card>
  }
  
}


