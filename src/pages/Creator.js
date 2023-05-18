import { Button, Col, Container, Row, Form, Spinner } from "react-bootstrap";
import React, { useState, useEffect  } from "react";

import useBunzz from '../hooks/useBunzz';

import { getErc20CappedContract, mint, pause, unpause  } from '../contracts/utils'
import { useWeb3React } from "@web3-react/core";

import { bnToDec, isAddress } from "../utils";
const Creator = () => {
    const bunzz = useBunzz();
    const { account} = useWeb3React();
    const erc20CappedContract = getErc20CappedContract(bunzz);


    const [mintAddress, setMintAddress] = useState("");
    const [mintAmount, setMintAmount] = useState(0);
   
  
  

    const [pendingMint, setPendingMint] = useState(false);
    const [pendingPause, setPendingPause] = useState(false);
    const [pendingUnpause, setPendingUnpause] = useState(false);
  
  
   
    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col lg="4" md="4" xs="12">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter Address" value={mintAddress} onChange={(val) => setMintAddress(val.target.value)} />

                          

                            <Form.Label>Input Amount</Form.Label>
                            <Form.Control type="email" placeholder="Enter Amount" value={mintAmount} onChange={(val) => setMintAmount(val.target.value)} />

                          
                        </Form.Group>
                            {!pendingMint ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                
                                    setPendingMint(true);

                                try {
                                    let txHash;
                                    
                                    txHash = await mint(
                                        erc20CappedContract,
                                        mintAddress,
                                        mintAmount,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingMint(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingMint(false);
                                    
                                }
                            }}>
                                Mint
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} Mint
                            </Button>
                        }
                        

                        {!pendingPause ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingPause(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await pause(
                                        erc20CappedContract,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingPause(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingPause(false);
                                    
                                }
                            }}>
                                Pause
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} Pause
                            </Button>
                        }
                        {!pendingUnpause ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingUnpause(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await unpause(
                                        erc20CappedContract,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingUnpause(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingUnpause(false);
                                    
                                }
                            }}>
                                Unpause
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} Unpause
                            </Button>
                        }
                       
                       
                        
                     
                    </Form>
                   

                                    

         

                  
                </Col>
            </Row>
        </Container>
    )
}

export default Creator;