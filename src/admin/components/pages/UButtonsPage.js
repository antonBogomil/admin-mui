import React from 'react';
import WrappedPage from "../WrappedPage";
import Button from "../Button";
import CardBlock from "../CardBlock";

const UButtonsPage = () => {
    return (
        <div className='flex-row'>
            <div className='flex-col flex-col-2'>
                <CardBlock>
                    <CardBlock.Title><h5>Button variant</h5>
                    </CardBlock.Title>
                    <CardBlock.Body>
                        <Button variant={'primary'}>Primary</Button>
                        <Button variant={'secondary'}>Secondary</Button>
                        <Button variant={'success'}>Success</Button>
                        <Button variant={'info'}>Info</Button>
                        <Button variant={'warning'}>Warning</Button>
                        <Button variant={'danger'}>Danger</Button>
                    </CardBlock.Body>
                </CardBlock>
            </div>
            <div className='flex-col flex-col-2'>
                <CardBlock>
                    <CardBlock.Title><h5>Button variant</h5>
                    </CardBlock.Title>
                    <CardBlock.Body>
                        <Button variant={'primary'}>Primary</Button>
                        <Button variant={'secondary'}>Secondary</Button>
                        <Button variant={'success'}>Success</Button>
                        <Button variant={'info'}>Info</Button>
                        <Button variant={'warning'}>Warning</Button>
                        <Button variant={'danger'}>Danger</Button>
                    </CardBlock.Body>
                </CardBlock>
            </div>
            <div className='flex-col flex-col-2'>
                <CardBlock>
                    <CardBlock.Title><h5>Button size</h5>
                    </CardBlock.Title>
                    <CardBlock.Body>
                        <div>
                            <br/>

                            <h6>Small buttons</h6>
                            <Button variant={'primary'} size={'small'}>Primary</Button>
                            <Button variant={'secondary'} size={'small'}>Secondary</Button>
                            <Button variant={'success'} size={'small'}>Success</Button>
                            <Button variant={'info'} size={'small'}>Info</Button>
                            <Button variant={'warning'} size={'small'}>Warning</Button>
                            <Button variant={'danger'} size={'small'}>Danger</Button>
                        </div>
                        <div>
                            <br/>
                            <h6>Normal buttons</h6>
                            <Button variant={'primary'} size={'normal'}>Primary</Button>
                            <Button variant={'secondary'} size={'normal'}>Secondary</Button>
                            <Button variant={'success'} size={'normal'}>Success</Button>
                            <Button variant={'info'} size={'normal'}>Info</Button>
                            <Button variant={'warning'} size={'normal'}>Warning</Button>
                            <Button variant={'danger'} size={'normal'}>Danger</Button>
                        </div>
                        <div>
                            <br/>

                            <h6>Large buttons</h6>
                            <Button variant={'primary'} size={'large'}>Primary</Button>
                            <Button variant={'secondary'} size={'large'}>Secondary</Button>
                            <Button variant={'success'} size={'large'}>Success</Button>
                            <Button variant={'info'} size={'large'}>Info</Button>
                            <Button variant={'warning'} size={'large'}>Warning</Button>
                            <Button variant={'danger'} size={'large'}>Danger</Button>
                        </div>
                        <div>
                            <br/>

                            <h6>Block buttons</h6>
                            <Button variant={'primary'} size={'block'}>Primary</Button>
                            <Button variant={'secondary'} size={'block'}>Secondary</Button>
                            <Button variant={'success'} size={'block'}>Success</Button>
                            <Button variant={'info'} size={'block'}>Info</Button>
                            <Button variant={'warning'} size={'block'}>Warning</Button>
                            <Button variant={'danger'} size={'block'}>Danger</Button>
                        </div>

                    </CardBlock.Body>
                </CardBlock>
            </div>
        </div>
    );
};

export default WrappedPage(UButtonsPage, {title: 'UI Components Demo'});