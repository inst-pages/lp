import Link from "next/link";
import React from "react";
import { siteTitle } from "../../constants/meta";
import { routeLegalPrivacy, routeLegalTerms } from "../../constants/routes";
import Button from "../atoms/Button";
import Par from "../typography/Par";
import { useFormik } from "formik";

const SendInBlueForm = ({
  label = "Send me daily news for FREE!",
  light = false,
  formAction = "https://71f87b96.sibforms.com/serve/MUIEAMWz4ilbDq8IbO03TMfyhATOaCdZdGIO5_sGlFaTbVnUPwMBEkJnp0StODtxuJ1KWqP3JJNNrqD-iKFxKTFhNZAzSeZXnomCbwd-47XZLXGrPfk5S03eZtRgmrtBqg1gS8xTlTOHhLMknpMdzrdY-KqJ_58odaHrmuJ8OY6cvRXbUppWNAsOobeiKIx1y3MmdglVCH0akQq6",
}) => {
  const formik = useFormik({
    initialValues: {
      EMAIL: "",
      OPT_IN: "1",
      email_address_check: "",
      locale: "en",
      html_type: "simple",
    },
    onSubmit: (e) => {
    },
  });

  return (
    <>
      <form id="sib-form" method="POST" action={formAction}>
        <div className="flex flex-col overflow-hidden rounded-lg border p-1 focus-within:border-red-400 focus-within:ring focus-within:ring-red-300 focus-within:ring-opacity-40 dark:border-gray-600 dark:focus-within:border-red-300 lg:flex-row">
          <input
            className="w-full bg-white px-6 py-2 text-gray-700 placeholder-gray-500 outline-none focus:placeholder-transparent dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:placeholder-transparent"
            type="text"
            id="EMAIL"
            name="EMAIL"
            autoComplete="off"
            data-required="true"
            required
            placeholder="Enter your email"
            aria-label="Enter your email"
            tabIndex={-1}
            onChange={formik.handleChange}
            value={formik.values.EMAIL}
          />
        </div>
        <label className="mt-2 flex items-center">
          <div>
            <input
              type="checkbox"
              id="OPT_IN"
              name="OPT_IN"
              onChange={formik.handleChange}
              value={formik.values.OPT_IN}
              required
            />
            <span data-required="*"></span>
          </div>
          <Par light={light} className="ml-4 text-xs">
            Yes, please allow {siteTitle} to keep in touch with additional
            marketing communication.
            <span className="italic text-gray-400">(Optional)</span>
          </Par>
        </label>

        <div className="mt-4">
          <Button
            className="justify-center px-4 inline-flex w-full py-2"
            form="sib-form"
            type="submit"
          >
            {label}
          </Button>
        </div>
        <input
          type="text"
          name="email_address_check"
          readOnly
          value={formik.values.email_address_check}
          className="hidden"
        />
        <input
          type="hidden"
          readOnly
          name="locale"
          value={formik.values.locale}
        />
        <input
          type="hidden"
          readOnly
          name="html_type"
          value={formik.values.html_type}
        />
      </form>
      <Par light={light} className="ml-4 mt-4 inline-block text-xs">
        By registering, you agree to the{" "}
        <Link href={routeLegalTerms}>
          terms
        </Link>{" "}
        and{" "}
        <Link href={routeLegalPrivacy}>
          privacy policy
        </Link>
        . We use Sendinblue as our marketing platform. By Clicking below to
        submit this form, you acknowledge that the information you provided will
        be transferred to Sendinblue for processing in accordance with their{" "}
        <Link
          href="https://www.sendinblue.com/legal/termsofuse/"
          target="_blank"
          rel="noreferrer"
        >
          terms of use
        </Link>
      </Par>
    </>
  );
};

export default SendInBlueForm;
