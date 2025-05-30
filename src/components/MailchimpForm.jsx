import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  // Vite বা অন্য modern bundler এ env ভেরিয়েবল ইউজ করতে import.meta.env ব্যবহার করো
  const postUrl = `${import.meta.env.VITE_MAILCHIMP_URL}?u=${import.meta.env.VITE_MAILCHIMP_U}&id=${import.meta.env.VITE_MAILCHIMP_ID}`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </>
  );
}
