/* eslint-disable @typescript-eslint/no-explicit-any */
export const request = async ({
  type,
  url = "",
  data = {},
  token,
}: {
  type: "GET" | "POST";
  url: string;
  data?: any;
  file?: boolean;
  token?: string;
}): Promise<any> => {
  const option: RequestInit = {
    method: type,
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  if (data) option.body = data;

  try {
    const response = await fetch(url, option);

    if (
      typeof response === "object" &&
      "ok" in response &&
      response.ok &&
      response.status === 401
    ) {
      throw new Error("401");
    }

    if (
      typeof response === "object" &&
      "ok" in response &&
      response.ok &&
      response.status === 200
    ) {
      return await response.json();
    }
  } catch (error) {
    console.error(error);
    // throw new Error('Error');
  }

  return null;
};
