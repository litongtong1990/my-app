import React, { Component } from "react";
import { Card ,Divider, Tag, Steps } from 'antd';
import './index.css'

const { Meta } = Card;
const { Step } = Steps;

export class PipeLine extends Component {
  constructor(props) {
    super(props);
        this.state = {
            current: this.props.pipeline.steps[0],
            show: false
        };
    }

  render() {
    const { props, state } = this
    return (       
        <Card style={{width: '100%'}}>
        <Meta
          title={
            <div>
              <span style = {{fontSize:16}}>{props.pipeline.name}</span>                      
              <Divider type="vertical" />
              <span style = {{fontSize:16}}>{props.pipeline.submitter}</span>                      
              <Divider type="vertical" />
              <span style = {{fontSize:16}}>{props.pipeline.time}</span>  
              <Divider type="vertical" />
              <Tag color="blue"><span style = {{fontSize:16}}>{props.pipeline.tag}</span></Tag>                      
            </div>
          }
          description={     
              <div>
                  <Steps current={1}>
                      {props.pipeline.steps.map(
                          step => <Step 
                            key={step}
                            title={step} 
                            onClick = {() => 
                                {
                                    if(this.state.current === step)
                                    {
                                        this.setState({show:!state.show})
                                    }
                                    else
                                    {
                                        this.setState({current:step, show:true})
                                    }

                                }
                            }
                            />
                      )}
                  </Steps>
                  {state.show && <div className="steps-content">{state.current}</div>}
                  
              </div>         


        }
        />
      </Card>   
    );
  }
}