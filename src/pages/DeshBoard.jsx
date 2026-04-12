import React, { useState } from 'react';
import NavBarForDash from '../components/NavBarForDash/NavBarForDash';
import ReceiptUpload from '../components/ReceiptUpload/ReceiptUpload';
import VoiceInputCard from '../components/VoiceInputCard/VoiceInputCard';
import StatusBar from '../components/StatusBar/StatusBar';
import ProductAnalysis from '../components/ProductAnalysis/ProductAnalysis';
import MarketTrends from '../components/MarketTrends/MarketTrends';
import AIAssistant from '../components/AIAssistant/AIAssistant';
import TransactionData from '../components/TransactionData/TransactionData';
import FooterDash from '../components/FooterDash/FooterDash';
import DisplayDemand from '../components/DisplayDemand/DisplayDemand';
import AddTransaction from '../components/AddTransaction/AddTransaction';
const DeshBoard = () => {

    const [trends, setTrends] = useState([]);
    return (
        <div>
            <NavBarForDash></NavBarForDash>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ReceiptUpload />
                    <AddTransaction />
            </div>
            <StatusBar></StatusBar>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProductAnalysis></ProductAnalysis>
            <MarketTrends setTrends={setTrends}></MarketTrends>
            </div>
            <DisplayDemand trends={trends}></DisplayDemand>
            <TransactionData></TransactionData>
            <FooterDash></FooterDash>

        </div>
    );
};

export default DeshBoard;