import './symbolCard.css';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { useAppSelector } from '@/hooks/redux';
import ListItem from '@/components/ListItem';

type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string) => void;
  price: number;
};

const SymbolCard = ({ id, onClick, price }: SymbolCardProps) => {
  const { trend, companyName } = useAppSelector((state) => state.stocks.entities[id]);
  const handleOnClick = () => {
    onClick(id);
  };
  return (
    <div onClick={handleOnClick} className="symbolCard">
      <div>
        {id} - {trend}
      </div>
      <div>Price:</div>
      <div>{price || '--'} </div>
      <ListItem Icon={<CompanyIcon />} label={companyName} />
    </div>
  );
};
export default SymbolCard;
