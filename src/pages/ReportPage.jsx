import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/Container';

const ReportPage = () => {

    const { reportId } = useParams();
    const [report, setReport] = useState(null);
    
    const service = "";

    useEffect(() => {
        if(reportId) {
             service?.getReport(reportId).then((response) =>  {
                if(response) {
                    setReport(response);
                }
             });
        }
    }, [reportId]);

  return (
    <div>
      <Container>
        {report ? 
        (<div> 
            Show Report
        </div>) : (
        <div>
            Enter Report Id to see report
        </div>)}
      </Container>
    </div>
  )
}

export default ReportPage;
