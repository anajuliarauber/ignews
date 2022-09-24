import { signIn, useSession } from 'next-auth/react';
import styles from './styles.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession(); // useSession é usado no front e o getSession no back
  const handleClick = () => {
    if (!session) {
      signIn('github');
      return;
    }
  };

  return (
    <button
      type="button"
      className={styles.subscriptionButton}
      onClick={handleClick}
    >
      Subscribe now
    </button>
  );
}
