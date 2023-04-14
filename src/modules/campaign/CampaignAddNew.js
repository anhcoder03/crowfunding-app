import FormRow from "components/common/FormRow";
import { Field } from "components/field";
import { Input } from "components/input";
import { Label } from "components/label";
import React from "react";
import { useForm } from "react-hook-form";

const CampaignAddNew = () => {
  const { handleSubmit, control } = useForm();
  const handleAddNewCampaign = (values) => {};
  return (
    <div className="bg-white rounded-xl px-[66px] py-10">
      <div className="mb-10 text-center">
        <h1 className="py-4 px-14 bg-opacity-5 font-bold text-[25px] inline-block rounded-xl bg-text4 text-text2">
          Start a Campaign 🚀
        </h1>
      </div>
      <form onSubmit={handleSubmit(handleAddNewCampaign)}>
        <FormRow>
          <Field>
            <Label htmlFor="title">Campaign Title *</Label>
            <Input
              control={control}
              name="title"
              placeholder="Write a title"
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="category">Select a category *</Label>
          </Field>
        </FormRow>
      </form>
    </div>
  );
};

export default CampaignAddNew;
